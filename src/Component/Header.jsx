import style from '../App.module.css'
import Home from'../Images/home.png'

const Header = () => {

    return (
        <div className={style.cont}>
        <div className={style.head}>

        <h2>
            WELCOME BACK!
        </h2>

        <p>Don't have a account,<a href="">sign up</a></p>
        </div>
            <div className={style.flex}>
                <nav>
                    <li>Help</li>
                    <li>Contact</li>
                    <li>
                        <select name="" id="">
                            <option value="english">English</option>
                            <option value="english">French</option>
                        </select>
                    </li>
                    <li>Sign Up</li>
                    <div>
                        <img src={Home} alt="" />
                    </div>
                </nav>
            
            </div>
            </div>
       

    )
}

export default Header