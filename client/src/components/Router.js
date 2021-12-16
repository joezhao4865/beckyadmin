import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Quickbook from './Quickbook';
//import ReportSearch from './ReportSearch';
import Navbar from './Navbar';
import Payroll from './Payroll';
import Invoice from './Invoice';

const Router = () => <BrowserRouter>
		<Navbar />
		<Switch>	
			<Route exact path='/' component={Home} />
			<Route path='/payroll' component={Payroll} />
			<Route path='/invoice' component={Invoice} />
			<Route path='/quickbook' component={Quickbook} />
				{/*	<Route path='/income-expense' component={ReportSearch} />
			</Route> */}
		</Switch>
	</BrowserRouter>


export default Router