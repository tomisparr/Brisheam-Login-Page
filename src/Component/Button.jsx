import style from '../App.module.css'
import fbicon from '../Images/facebook.png'
import gooicon from '../Images/Frame 18.png'
import appicon from '../Images/apple.png'
import imgicon from '../Images/Image.png'
import vecicon from '../Images/Vector.png'

const Button = () =>{

    return( 
        <div className={style.log} >

            <div className={style.input}>
        <form action="">
            <div className= {style.enter}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='tomisparr@gmail.com'   />
            </div>

            <div className= {style.enter}>
                <label htmlFor="">Password</label>
                <input type="Password"placeholder='............' />
            </div>
            <div className= {style.rad}>
                <input type="radio" />
                <label htmlFor=" Remember me ">Remember me</label>
                <a href="">Forget Password?</a>
            </div>
            <div className= {style.in}>
            <input type="button" value="Sign in" />
            </div>
        </form>

            <div className={style.or}>
            <div className={style.with}></div>
                <p>or continue with</p>
                <div  className={style.with} ></div>
            </div>
            <div className={style.iconz}>

                <div className={style.icon}>
                   <a href="https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=AaSxoQxrrHADcsUg22dWfAqL8cZvQ9uguBIo9REosa0Y9DbtoGPj4HbJWgr9uE-SNvRzKGSK9LRALg&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> <img src={gooicon} alt="" /></    a>      
                    </div>

                    <div className={style.icon}>                    <a href="https://www.facebook.com/"><img src= {fbicon} alt="" /></a>  </div>


             <div className={style.icon}> <a href="https://support.apple.com/en-ng/111001"> <img src= {appicon} alt="" /></a>
                    </div> 

                    
            </div>

            </div>

          <div className={style.img}>
           <div className={style.pen}><img src={imgicon} alt="" /></div> 

           <div className={style.bri}><img src={vecicon} alt="" /></div> 

            </div> 
           
              
        </div>

    )
}

export default Button