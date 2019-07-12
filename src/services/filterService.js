const filterData = [
	{ name: 'Name 1', active: true },
	{ name: 'Name 2', active: false },
	{ name: 'Name 3', active: true },
	{ name: 'Name 4', active: true },
	{ name: 'Name 5', active: false },
	{ name: 'Name 6', active: false },
	{ name: 'Name 7', active: true },
	{ name: 'Name 8', active: true },
	{ name: 'Name 9', active: true },
	{ name: 'Name 10', active: false },
	{ name: 'Name 11', active: true },
	{ name: 'Name 12', active: true },
	{ name: 'Name 13', active: true },
	{ name: 'Name 14', active: true },
	{ name: 'Name 15', active: false },
	{ name: 'Name 16', active: true },
	{ name: 'Name 17', active: true },
	{ name: 'Name 18', active: false },
	{ name: 'Name 19', active: true },
	{ name: 'Name 20', active: true },
	{ name: 'Name 21', active: false },
	{ name: 'Name 22', active: true },
	{ name: 'Name 23', active: false },
	{ name: 'Name 24', active: true },
	{ name: 'Name 25', active: false },
];

export default class FilterServises {
	getFilterData() {
		const data = () => {
			if (Math.random() < 0.8) {
				return {
					status: 'ok',
					tasks: filterData,
				};
			} else {
				return {
					status: 'err',
					message: 'данные не получены',
				};
			}
		};

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.8) {
					reject(new Error('Network Error'));
				} else {
					resolve(data());
				}
			}, 1200);
		});
	}
}
