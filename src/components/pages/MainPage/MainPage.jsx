import React, { Fragment } from 'react';

const MainPage = () => {
	return (
		<Fragment>
			<h1 className="uk-heading-divider">Главная страница</h1>
			Добрый день!
			<br /><br/>
			При дизайне применялись элементы библиотеки UIkit.
			<br /><br/>
			Избыточность (на первый взгляд) папок и файлов перебивается возможностью масштабирования проекта и
			переиспользования файлов (мне так кажется).
			<br /><br/>
			В мок-файлах предопределен процент ошибок (и ошибок сервера, и ошибок связи) для реализации их обработки.
			<br /><br/>
			Вся бизнес-логика реализована через Redux.
			<br /><br/>
			логин - admin
			<br />
			пароль - 123
			<br />
		</Fragment>
	);
};

export default MainPage;