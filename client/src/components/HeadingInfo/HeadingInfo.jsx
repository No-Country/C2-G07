import styles from '../HeadingInfo/HeadingInfo.modules.css'

const HeadingInfo = () =>{
    return(
        <div class="accordion">
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <h1>Fotografía</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <h1>Dibujo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <h1>Escultura</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <h1>¡Y más!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export { HeadingInfo };