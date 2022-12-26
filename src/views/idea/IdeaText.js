import React from "react";

export default function IdeaText() {
  return (
    <div className="idea-text">
      <div className="idea-block">
        <h2 className="idea-block__title h2">Basic. Главное в целом:</h2>
        <p className="idea-block__text">
          Приложение примера укомплектованного многофункционального журнала с
          возможностью ведения и развития любой производственной деятельности
          или же для поиска информации, развлечения, беззаботного
          времяпрепровождения.
        </p>
        <h3 className="h3">Возможности:</h3>
        <ul>
          <li>
            Социальная сеть, ведения фото/видео/текстового микроблогинга.{" "}
            <span className="idea-block__star">*</span>
          </li>
          <li>
            Онлайн кинотеатр/видеохостинг.{" "}
            <span className="idea-block__star">*</span>
          </li>
          <li>
            Видеостриминг. <span className="idea-block__star">*</span>
          </li>
          <li>Имиджборд и анонимный веб-форум.</li>
        </ul>
        <p>
          <span className="idea-block__star">*</span> - Ветвь имеет свою
          производственную деятельность: Журналистика. Кино/мульт производство.
          Создание компьютерных игр.
        </p>
      </div>

      <div className="idea-block">
        <p>
          Для представления примера главной страницы входа в приложение служат
          яркие/провокационные/сильные обложки журналов: Time, The New Yorker,
          National Geographic, etc. Будут создаваться и меняться в зависимости
          от текущего инфоповода для массового обсуждения.
        </p>
      </div>

      <div className="idea-block">
        <h2 className="h2">Main Concepts. Идеи к рубрикам:</h2>
        <p>
          Журналистика (новое повествование современного дыхания и грязный
          реализм). Своеобразная подача информации без цензуры, с характером
          стиля письменности Хантера Томпсона, Буковски, Паланика, etc.
          Рассмотреть обзоры на: реклама, политика, бюрократия, вопрос цензуры,
          насилие, воспитание поколений, проблемы глобализма, перенаселение
          планеты, религия, эффект массы, etc.
        </p>
        <p>
          Гонзо журналистика(разобрать суть, реинкарнировать). Ведение
          повествования от первого лица(группы лиц) - текст/видео-дневников.
          Нырять в самое пекло идиотизма проблемы изучая ее изнутри или
          создавать определенные условия для ее появления(смесь психологических
          экспериментов поведения, внедрения в секты, церемония аяуаски,
          посещение burning man, etc.).
        </p>
      </div>

      <div className="idea-block">
        <p>
          Поднимаем киноиндустрию и геймдев с колен. Пустить в ход множество
          собственных идей/сценариев/недоработок. Собрать воедино крутых
          специалистов и начать творить новую историю игровой индустрии и
          украинского кино. Дополнительно иметь свою студию правильного перевода
          (рус, укр, eng, “смешной перевод” - гоблин).
        </p>
      </div>

      <div className="idea-block">
        <h2 className="h2">Excursus. Начальное производство.</h2>
        <p>
          Первичный запуск задействует рубрику Журналистика и рабочий имиджборд
          с идеями и рекламой остального, что должно способствовать начальному
          толчку, набору аудитории и дальнейшему развитию.
        </p>
      </div>

      <div className="">
        <h2 className="h2">Почему(?):</h2>
        <p>
          Все текущие социальные сети превратились или превращаются в
          “телевизоры былой эпохи”, где вокруг сплошная цензура и поток
          нескончаемой рекламы. И выбор просматриваемого контента всё реже
          остается за пользователем. Для этого и нужна новая свободная площадка,
          а для Украины это будет первое своего рода место для развития
          творческого потенциала, создании и реализации личности, открытости и
          совершенно нового виденья. Здесь и будут собраны лучшие возможности
          воедино, без лишней мишуры и ненужных функций, с умопомрачительным
          минималистически-модернистским дизайном и максимальной отзывчивостью к
          потребителю. На фоне текущей войны в стране и после очевидной победы
          Украины – это место идеально займет свою нишу производства культуры и
          искусства, свободы выражения мысли и роста будущих специалистов
          желаемой отрасли.
        </p>
      </div>
    </div>
  );
}