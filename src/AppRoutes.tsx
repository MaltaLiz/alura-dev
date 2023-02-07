import CodeEditor from 'pages/codeEditor';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<></>} />
				<Route path='/register' element={<></>} />
				<Route path='/' element={<CodeEditor/>} />
				<Route path='/comunity' element={<></>} />
			</Routes>
		</Router>
	);
}
