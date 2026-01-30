<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Первый.Навигатор | Движение Первых</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script src="components/navbar.js"></script>
    <script src="components/footer.js"></script>
</head>
<body class="bg-white font-sans">
    <custom-navbar></custom-navbar>

    <main class="container mx-auto px-4 py-8">
        <!-- Hero Section -->
        <section class="text-center mb-16">
            <div class="max-w-4xl mx-auto">
                <img src="http://static.photos/red/640x360/1" alt="Движение Первых" class="mx-auto rounded-lg shadow-lg mb-6">
                <h1 class="text-4xl font-bold text-red-600 mb-4">Добро пожаловать в Первый.Навигатор!</h1>
                <p class="text-lg text-gray-700">Твой цифровой помощник во всех вопросах Движения Первых</p>
            </div>
        </section>

        <!-- Quick Links -->
        <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <a href="#join" class="bg-red-100 hover:bg-red-200 transition p-6 rounded-lg shadow-md flex flex-col items-center">
                <i data-feather="user-plus" class="text-red-600 w-12 h-12 mb-4"></i>
                <h3 class="text-xl font-semibold text-center">Хочу вступить</h3>
            </a>
            <a href="#projects" class="bg-red-100 hover:bg-red-200 transition p-6 rounded-lg shadow-md flex flex-col items-center">
                <i data-feather="lightbulb" class="text-red-600 w-12 h-12 mb-4"></i>
                <h3 class="text-xl font-semibold text-center">Мои идеи</h3>
            </a>
            <a href="#help" class="bg-red-100 hover:bg-red-200 transition p-6 rounded-lg shadow-md flex flex-col items-center">
                <i data-feather="help-circle" class="text-red-600 w-12 h-12 mb-4"></i>
                <h3 class="text-xl font-semibold text-center">Помощь</h3>
            </a>
            <a href="#parents" class="bg-red-100 hover:bg-red-200 transition p-6 rounded-lg shadow-md flex flex-col items-center">
                <i data-feather="users" class="text-red-600 w-12 h-12 mb-4"></i>
                <h3 class="text-xl font-semibold text-center">Родителям</h3>
            </a>
        </section>

        <!-- Join Section -->
        <section id="join" class="mb-16">
            <h2 class="text-3xl font-bold text-red-600 mb-8 flex items-center">
                <i data-feather="user-plus" class="mr-3"></i> Хочу вступить
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как создать ID на сайте будьвдвижении.рф</h3>
                    <ol class="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Перейдите на сайт [ССЫЛКА_НА_САЙТ_ДВИЖЕНИЯ]</li>
                        <li>Нажмите кнопку "Регистрация"</li>
                        <li>Заполните все обязательные поля</li>
                        <li>Подтвердите email</li>
                        <li>Ваш ID готов!</li>
                    </ol>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как подтвердить личность через Госуслуги</h3>
                    <ol class="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Авторизуйтесь на сайте</li>
                        <li>Перейдите в раздел "Подтверждение личности"</li>
                        <li>Выберите способ "Через Госуслуги"</li>
                        <li>Следуйте инструкциям на экране</li>
                    </ol>
                </div>
            </div>
            <div class="mt-8 text-center">
                <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition inline-flex items-center">
                    <i data-feather="edit" class="mr-2"></i> Подать заявление онлайн
                </a>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="mb-16">
            <h2 class="text-3xl font-bold text-red-600 mb-8 flex items-center">
                <i data-feather="lightbulb" class="mr-3"></i> Мои идеи и проекты
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как оформить свою идею в проект</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Определи цель проекта</li>
                        <li>Составь план реализации</li>
                        <li>Рассчитай бюджет</li>
                        <li>Найди команду единомышленников</li>
                        <li>Оформи презентацию</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как подать заявку на грант</h3>
                    <ol class="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Зарегистрируйся на платформе Первые.Гранты</li>
                        <li>Заполни заявку по форме</li>
                        <li>Прикрепи необходимые документы</li>
                        <li>Отправь на модерацию</li>
                        <li>Жди результат!</li>
                    </ol>
                </div>
            </div>
            <div class="mt-8 text-center">
                <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition inline-flex items-center">
                    <i data-feather="calendar" class="mr-2"></i> Календарь текущих проектов
                </a>
            </div>
        </section>

        <!-- Directions Grid -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-red-600 mb-8 text-center">Направления Движения</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="book" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Образование</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="heart" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Здоровье</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="globe" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Экология</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="code" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Технологии</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="mic" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Медиа</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="briefcase" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Карьера</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="award" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Спорт</h3>
                </div>
                <div class="bg-red-50 p-4 rounded-lg text-center">
                    <i data-feather="music" class="text-red-600 w-8 h-8 mx-auto mb-2"></i>
                    <h3 class="font-semibold">Культура</h3>
                </div>
            </div>
        </section>

        <!-- Help Section -->
        <section id="help" class="mb-16">
            <h2 class="text-3xl font-bold text-red-600 mb-8 flex items-center">
                <i data-feather="help-circle" class="mr-3"></i> Помощь и контакты
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Где найти наше отделение</h3>
                    <p class="text-gray-700 mb-4">Найти первичное отделение в школе/городе можно:</p>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>На карте на сайте [ССЫЛКА_НА_САЙТ_ДВИЖЕНИЯ]</li>
                        <li>Через нашего бота в Telegram [ТГ_КАНАЛ]</li>
                        <li>Уточнить у школьного координатора</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Техническая поддержка</h3>
                    <p class="text-gray-700 mb-4">Если сайт "завис" или возникли вопросы:</p>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Напишите в поддержку ВК [ССЫЛКА_НА_ВК]</li>
                        <li>Позвоните на горячую линию: 8-800-XXX-XX-XX</li>
                        <li>Обратитесь к своему куратору</li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4 text-center">Контактные лица</h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="text-center">
                        <i data-feather="user" class="text-red-600 w-10 h-10 mx-auto mb-2"></i>
                        <h4 class="font-semibold">Куратор</h4>
                        <p class="text-gray-700">Иванова А.П.</p>
                        <p class="text-gray-600">example@mail.ru</p>
                    </div>
                    <div class="text-center">
                        <i data-feather="award" class="text-red-600 w-10 h-10 mx-auto mb-2"></i>
                        <h4 class="font-semibold">Председатель</h4>
                        <p class="text-gray-700">Петров В.С.</p>
                        <p class="text-gray-600">example2@mail.ru</p>
                    </div>
                    <div class="text-center">
                        <i data-feather="camera" class="text-red-600 w-10 h-10 mx-auto mb-2"></i>
                        <h4 class="font-semibold">Медиа-центр</h4>
                        <p class="text-gray-700">Сидорова М.К.</p>
                        <p class="text-gray-600">media@mail.ru</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Parents Section -->
        <section id="parents" class="mb-16">
            <h2 class="text-3xl font-bold text-red-600 mb-8 flex items-center">
                <i data-feather="users" class="mr-3"></i> Родителям и Наставникам
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как дать согласие на участие ребенка</h3>
                    <ol class="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Авторизуйтесь на сайте как родитель</li>
                        <li>Перейдите в раздел "Мои дети"</li>
                        <li>Выберите ребенка из списка</li>
                        <li>Нажмите "Дать согласие"</li>
                        <li>Подпишите документ ЭЦП</li>
                    </ol>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                    <h3 class="text-xl font-semibold mb-4">Как стать наставником</h3>
                    <ol class="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Заполните анкету на сайте</li>
                        <li>Приложите резюме</li>
                        <li>Пройти собеседование</li>
                        <li>Получить сертификат</li>
                    </ol>
                </div>
            </div>
        </section>
    </main>

    <custom-footer></custom-footer>

    <script>
        feather.replace();
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>