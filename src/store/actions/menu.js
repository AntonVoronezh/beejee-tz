const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';

const changeActivePageAC = page => ({
	type: CHANGE_ACTIVE_PAGE,
	page,
});

export { changeActivePageAC, CHANGE_ACTIVE_PAGE };
