﻿import s from './style.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>POKEMON</h1>
            </div>
        </header>
    );
}

export default Header;