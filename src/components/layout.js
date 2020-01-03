// STANDARD BASE LAYOUT
import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<>
		<Header></Header>
		<main>{children}</main>
		<Footer></Footer>
	</>
);

export default Layout;
