# Обновление сайта и передача проекта

Инструкция для того, кто будет вносить изменения или получит проект в работу.

---

## Как вносить изменения

### Вариант 1: Через GitHub (рекомендуется)

1. **Доступ к репозиторию**  
   Владелец добавляет нового человека как Collaborator:  
   GitHub → Repo → Settings → Collaborators → Add people

2. **Клонировать проект локально:**
   ```bash
   git clone https://github.com/viktoriusnew/nanonomera.git
   cd nanonomera
   ```

3. **Внести изменения** в файлы (в редакторе, Cursor, VS Code и т.п.)

4. **Закоммитить и отправить:**
   ```bash
   git add .
   git commit -m "Описание изменений"
   git push origin main
   ```

5. **На сервере подтянуть и пересобрать:**
   ```bash
   ssh user@IP_СЕРВЕРА
   cd ~/nanonomera
   git pull origin main
   docker compose -f docker-compose.standalone.yml build nextjs
   docker compose -f docker-compose.standalone.yml up -d nextjs
   ```

---

### Вариант 2: Правки прямо на сервере

Если нужно быстро поправить текст или конфиг:

```bash
ssh root@IP_СЕРВЕРА
cd ~/nanonomera

# Редактировать файлы (nano, vim или через SFTP)
nano app/src/app/page.tsx
nano app/src/data/blog.json

# Пересобрать и перезапустить
docker compose -f docker-compose.standalone.yml build nextjs
docker compose -f docker-compose.standalone.yml up -d nextjs
```

⚠️ Изменения на сервере не попадут в GitHub. Чтобы сохранить их в репо, нужно сделать `git add`, `git commit`, `git push` с сервера (если там настроен git).

---

## Что передать новому владельцу

| Что | Где / как |
|-----|-----------|
| **Доступ к GitHub** | Добавить в Collaborators или передать логин/пароль (токен) |
| **Доступ к VPS** | SSH-ключ или логин/пароль |
| **Доступ к домену** | Логин в панель регистратора (Reg.ru, Timeweb и т.п.) |
| **Telegram-канал** | Если нужен доступ к t.me/nanonomera |

---

## Частые задачи

### Изменить текст на главной
Файл: `app/src/app/page.tsx`

### Добавить или изменить статью блога
Файл: `app/src/data/blog.json`  
Формат: `keywords`, `url`, `article_with_links`, `links_to`

### Изменить изображения
Папка: `app/public/images/`  
- `hero/` — фон главной  
- `reviews/` — отзывы  
- `variants/` — варианты номеров  

### Изменить ссылки (Telegram, WhatsApp)
Файлы: `app/src/app/page.tsx`, `app/src/components/Header.tsx`

### Изменить домен
Файлы: `.env`, `docker-compose.standalone.yml`, `app/src/data/blog.json`  
Подробнее: `MIGRATION.md`

---

## Команды для обновления на сервере

```bash
cd ~/nanonomera

# Подтянуть изменения с GitHub
git pull origin main

# Пересобрать и перезапустить сайт
docker compose -f docker-compose.standalone.yml build nextjs
docker compose -f docker-compose.standalone.yml up -d nextjs

# Проверить статус
docker compose -f docker-compose.standalone.yml ps
```

---

## Локальная разработка (без Docker)

Для проверки изменений на своём компьютере:

```bash
cd nanonomera/app
npm install
npm run dev
```

Сайт откроется на http://localhost:3000
