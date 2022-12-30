function navbar() {
    return `     <div id="nav-logo">
    <div id="logo">
    <a href="./index.html"><img src="https://64.media.tumblr.com/05a3bc6332282d619f293e24fe817813/8064708285c5f9b0-bd/s400x600/7956110871fd1201c38342294d83d1e3847c4a69.pnj"
    alt=""></a>
        
    </div>
    <div id="btn-Language">
        <button id="btn_l">EN</button>
    </div>
</div>
<div id="mid-nav">
    <ul>
        <li><a href="#">Why T-Track <i class="fa-sharp fa-solid fa-caret-down"></i></a>
            <ul>
                <li><a href="#">Overview <i style="transform:rotate(-90deg)"
                            class="fa-sharp fa-solid fa-caret-down"></i></a>
                    <ul>
                        <li><a href="./industry.html">Industry</a></li>
                        <li><a href="./costumers.html">Customer</a></li>
                    </ul>
                </li>
                <li id="T-feature"><a href="#">Featurs <i style="transform:rotate(-90deg)"
                            class="fa-sharp fa-solid fa-caret-down"></i></a>
                    <ul>
                        <li><a href="#">Time Tracking</a></li>
                        <li><a href="#">Team Managment</a></li>
                        <li><a href="#">Task Managment</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </li>

            </ul>
        </li>
        <li><a href="#">Apps & Integrations <i class="fa-sharp fa-solid fa-caret-down"></i></a>
            <ul>
                <li><a href="#">Apps <i style="transform:rotate(-90deg)"
                            class="fa-sharp fa-solid fa-caret-down"></i></a>
                    <ul>
                        <li><a href="#">Browser Ext</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Desktop App</a></li>
                    </ul>
                </li>
                <li><a href="#">Integrations <i style="transform:rotate(-90deg)"
                            class="fa-sharp fa-solid fa-caret-down"></i></a>
                    <ul>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Jira</a></li>
                        <li><a href="#">MS Office</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blog</a></li>
    </ul>
</div>
<div id="right-nav">
    <p><a href="./login.html"">Log In</a></p>
    <a href="./signup.html"><button>Sign Up</button></a>
</div>`
}
export default navbar 
