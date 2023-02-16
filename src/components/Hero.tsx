import { TaggedText } from "./TaggedText";

export function Hero() {

    const text = [
        {
            accent: true,
            mainText: ["Hi, my name is"],
            tagText: "p",
            textSize: 16
        },
        {
            accent: false,
            mainText: ["Anirudh Giran"],
            tagText: "h1",
            textSize: 32
        },
        {
            accent: false,
            mainText: ["I am a software engineer and curious learner",
                "Creating beautiful websites with good UI and great UX",
                "for over 3 years"],
            tagText: "h3",
            textSize: 24
        }
    ]


    return (
        <section>
            <div className="left">
                {text.map((item, key) => <TaggedText key={key} mainText={item.mainText} tagText={item.tagText} textSize={item.textSize} accent={item.accent} />)}
            </div>
            <div className="right">
                <svg width="597" height="506" viewBox="0 0 597 506" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_110_83)">
                        <path d="M575.427 413.696H21.4851C9.63843 413.696 0 404.058 0 392.211V325.54H596.912V392.211C596.912 404.058 587.274 413.696 575.427 413.696Z" fill="#E6E6E6" />
                        <path d="M370.149 402.544H228.887V503.445H370.149V402.544Z" fill="#E6E6E6" />
                        <path d="M378.646 490.7H220.39V503.445H378.646V490.7Z" fill="#E6E6E6" />
                        <path d="M596.381 353.686H0V14.7442C0 6.6144 6.6144 0 14.7442 0H581.637C589.767 0 596.381 6.6144 596.381 14.7442V353.686Z" fill="#616161" />
                        <path d="M582.042 15.4007H13.8077V335.099H582.042V15.4007Z" fill="white" />
                        <path d="M123.853 205.949C128.202 202.356 133.582 201.687 135.868 204.455C138.155 207.223 136.482 212.379 132.131 215.974C130.413 217.433 128.37 218.46 126.173 218.969L107.553 233.962L100.703 225.075L119.787 211.237C120.7 209.175 122.095 207.362 123.853 205.949H123.853Z" fill="#FFB6B6" />
                        <path d="M16.2326 239.779C16.2232 239.116 16.2294 233.332 20.5115 229.676C25.4304 225.477 32.3712 227.177 34.8057 227.773C40.4293 229.15 40.8905 231.562 46.1717 234.041C56.0522 238.679 43.6723 236.305 49.5515 234.818C51.5866 234.303 80.8637 232.273 88.1513 227.787C102.325 219.064 111.982 213.774 111.982 213.774L118.295 226.4C118.295 226.4 109.166 239.094 96.3183 248.497C83.139 258.143 76.5494 262.966 66.5349 264.83C65.6725 264.99 44.4626 268.612 27.3797 255.849C23.4832 252.938 16.3439 247.604 16.2326 239.779L16.2326 239.779Z" fill="#0DA380" />
                        <path d="M35.8165 207.668C47.9627 207.668 57.8092 197.821 57.8092 185.675C57.8092 173.529 47.9627 163.682 35.8165 163.682C23.6703 163.682 13.8239 173.529 13.8239 185.675C13.8239 197.821 23.6703 207.668 35.8165 207.668Z" fill="#FFB6B6" />
                        <path d="M208.055 333.43L185.405 310.246L173.714 322.442L190.588 344.671L207.326 346.586L208.055 333.43Z" fill="#FFB6B6" />
                        <path d="M78.7257 289.954C80.0504 290.064 84.2603 290.908 88.2841 288.694C91.0303 287.183 92.4387 284.936 92.9144 284.222C98.8158 275.359 121.467 261.538 141.795 260.687C146.399 260.494 149.429 261.028 152.183 262.464C156.089 264.499 157.648 267.415 162.603 274.246C165.314 277.983 168.314 281.503 171.057 285.216C187.119 306.952 193.208 308.659 192.586 315.627C191.896 323.359 183.557 330.694 178.015 329.847C175.745 329.501 174.866 327.922 171.834 324.727C162.943 315.36 159.264 317.09 152.934 309.915C145.544 301.538 146.511 294.592 142.655 294.324C139.08 294.075 137.56 300.001 129.926 307.872C126.433 311.474 123.946 313.126 116.368 318.384C86.857 338.857 86.3861 340.295 80.4305 341.928C77.8248 342.642 59.3309 347.713 52.7429 339.644C42.4334 327.017 66.7888 288.962 78.7257 289.954V289.954Z" fill="black" />
                        <path d="M201.13 338.669C202.796 337.921 204.744 337.047 205.37 335.035C205.794 333.674 205.55 331.996 204.674 330.837C203.663 329.499 202.166 329.323 202.226 329.086C202.318 328.726 205.858 328.866 209.743 330.24C210.477 330.499 213.798 331.713 218.024 335.012C221.409 337.654 220.953 338.184 223.076 339.708C229.593 344.386 235.704 340.699 239.23 345.086C240.591 346.779 241.172 349.183 240.599 351.127C239.449 355.03 233.856 356.373 230.799 357.067C223.438 358.737 217.866 357.373 212.048 356.393C192.261 353.059 181.144 356.095 179.656 351.511C179.374 350.644 179.832 350.718 181.357 344.351C182.863 338.067 182.814 336.342 184.096 335.838C186.027 335.081 187.323 338.526 192.186 339.706C196.495 340.75 200.051 339.154 201.13 338.669H201.13Z" fill="black" />
                        <path d="M167.788 409.275L162.065 377.372L145.542 380.899L147.023 408.768L159.798 419.751L167.788 409.275Z" fill="#FFB6B6" />
                        <path d="M85.1876 300.678C86.222 301.513 89.2318 304.574 93.8046 305.002C96.9253 305.294 99.3521 304.226 100.147 303.902C110.007 299.882 136.511 301.165 153.809 311.876C157.727 314.302 159.934 316.445 161.407 319.18C163.496 323.057 163.148 326.345 163.413 334.781C163.558 339.395 164.063 343.992 164.248 348.605C165.333 375.61 169.413 380.441 164.985 385.858C160.072 391.867 149.054 393.255 144.943 389.442C143.26 387.88 143.419 386.081 142.704 381.735C140.607 368.991 136.591 368.357 135.383 358.865C133.971 347.784 138.672 342.579 135.632 340.192C132.813 337.978 128.229 342.028 117.492 344.255C112.579 345.274 109.593 345.244 100.37 345.339C64.4555 345.708 63.2578 346.634 57.413 344.641C54.8558 343.769 36.7059 337.579 35.7855 327.203C34.3452 310.966 75.8674 293.154 85.1876 300.678H85.1876Z" fill="black" />
                        <path d="M159.116 409.722C160.915 410.038 163.017 410.408 164.665 409.096C165.78 408.208 166.521 406.682 166.446 405.231C166.361 403.556 165.221 402.569 165.404 402.407C165.683 402.161 168.533 404.265 170.977 407.583C171.438 408.21 173.505 411.079 175.149 416.181C176.466 420.269 175.791 420.452 176.692 422.905C179.457 430.435 186.585 430.816 187.039 436.426C187.214 438.591 186.345 440.906 184.779 442.193C181.636 444.777 176.254 442.748 173.335 441.605C166.306 438.853 162.461 434.596 158.197 430.518C143.697 416.648 132.793 412.918 134.136 408.289C134.39 407.413 134.727 407.731 139.565 403.32C144.339 398.966 145.267 397.51 146.611 397.814C148.634 398.271 147.771 401.85 151.133 405.557C154.112 408.841 157.951 409.517 159.116 409.722Z" fill="black" />
                        <path d="M38.8149 189.879C39.6711 186.817 38.5957 185.7 39.6917 184.326C39.6918 184.326 40.1328 183.772 44.0761 182.28C42.9127 175.529 43.7838 174.388 43.7839 174.388C44.7878 173.072 46.799 172.754 48.1682 172.926C51.064 173.29 51.5766 175.908 53.4295 175.849C55.9891 175.768 59.0591 170.644 58.1062 166.204C57.3289 162.581 53.9774 159.891 53.1372 160.358C52.3042 160.821 49.3055 158.78 48.1683 159.189C47.3916 159.468 43.7359 159.096 42.907 159.481C42.0018 159.901 39.4094 162.516 39.1615 162.186C37.4391 159.897 37.4758 159.097 36.4765 158.604C34.7059 157.73 32.7808 159.346 29.4615 160.942C22.6319 164.227 20.6321 162.268 17.4775 165.034C15.884 166.432 15.0294 169.103 13.3854 174.388C11.0863 181.779 9.93671 185.474 11.0471 189.002C12.1795 192.601 13.847 191.818 16.3084 196.894C19.0482 202.546 18.1039 205.83 20.6927 207.125C22.6936 208.125 25.9091 207.488 27.1232 205.663C29.2018 202.538 23.8293 198.311 25.6617 193.387C26.7866 190.364 30.2565 188.072 32.3845 188.71C34.7905 189.432 34.9677 193.746 36.4766 193.679C37.7686 193.622 38.6657 190.413 38.8149 189.879H38.8149Z" fill="black" />
                        <path d="M22.1542 210.924C26.6547 205.878 44.9862 211.101 46.7068 219.108C47.4145 222.402 44.8019 223.793 45.5376 227.585C46.6137 233.132 52.7067 232.754 57.2293 238.4C63.65 246.416 57.0354 254.252 64.2443 267.629C65.7848 270.488 67.0831 272.897 69.7979 275.229C76.0275 280.579 81.8251 278.744 84.9971 283.705C87.3692 287.415 86.3946 291.987 86.1663 293.059C85.2301 297.451 82.6928 298.521 80.905 302.12C77.9304 308.107 81.2984 312.503 81.4896 319.657C81.7289 328.608 76.9722 341.016 67.4595 345.087C56.7725 349.66 43.883 342.085 37.6457 334.564C33.9239 330.076 32.8435 325.936 31.2153 320.826C23.9383 297.989 19.8272 300.054 14.2623 281.951C7.90058 261.256 6.64995 237.011 14.2623 229.339C15.2713 228.322 18.048 225.971 19.8158 221.739C22.1947 216.044 20.1396 213.183 22.1542 210.924L22.1542 210.924Z" fill="#0DA380" />
                        <path d="M88.6533 328.391C92.1426 332.824 92.6834 338.218 89.8617 340.438C87.0399 342.659 81.9248 340.864 78.4349 336.429C77.0165 334.676 76.0385 332.609 75.5826 330.401L61.0356 311.43L68.5523 305.697L83.4638 324.2C85.5035 325.163 87.283 326.6 88.6533 328.391H88.6533Z" fill="#FFB6B6" />
                        <path d="M35.3774 230.155C36.0246 230.011 41.6882 228.837 46.1409 232.283C51.2557 236.241 51.008 243.383 50.9211 245.888C50.7203 251.674 48.4528 252.618 47.1038 258.294C44.5801 268.913 49.3864 278.781 52.0418 284.233C52.9609 286.12 55.9138 291.895 61.7919 298.114C73.2239 310.209 83.4243 316.574 83.4243 316.574L72.4662 326.314C72.4662 326.314 55.0113 320.994 43.1839 310.335C31.0518 299.401 12.3946 260.716 8.52691 251.293C8.19383 250.481 12.9119 263.675 21.9204 244.347C23.9752 239.938 27.7401 231.861 35.3774 230.155H35.3774Z" fill="#0DA380" />
                        <path d="M315.837 221.081L302.754 214.884C308.12 222.373 312.744 234.069 315.22 243.376C319.411 234.706 326.168 224.098 332.856 217.762L319.028 221.319C327.549 179.559 359.598 149.58 396.298 149.58L396.817 148.072C358.483 148.072 324.537 177.635 315.837 221.081Z" fill="#3F3D56" />
                        <path d="M376.057 284.71H293.389C289.882 284.71 287.03 281.857 287.03 278.351C287.03 274.845 289.882 271.992 293.389 271.992H376.057C379.563 271.992 382.416 274.845 382.416 278.351C382.416 281.857 379.563 284.71 376.057 284.71Z" fill="#0DA380" />
                        <path d="M486.057 284.71H403.389C399.882 284.71 397.03 281.857 397.03 278.351C397.03 274.845 399.882 271.992 403.389 271.992H486.057C489.563 271.992 492.416 274.845 492.416 278.351C492.416 281.857 489.563 284.71 486.057 284.71Z" fill="#E6E6E6" />
                        <path d="M437.118 111.717H356.761C354.735 111.717 353.087 110.069 353.087 108.043C353.087 106.017 354.735 104.37 356.761 104.37H437.118C439.144 104.37 440.792 106.017 440.792 108.043C440.792 110.069 439.144 111.717 437.118 111.717V111.717Z" fill="#3F3D56" />
                        <path d="M480.239 150.915H313.641C311.615 150.915 309.966 149.267 309.966 147.241C309.966 145.215 311.615 143.568 313.641 143.568H480.239C482.264 143.568 483.912 145.215 483.912 147.241C483.912 149.267 482.264 150.915 480.239 150.915Z" fill="#3F3D56" />
                        <path d="M36.121 504.385C36.121 505.045 36.6511 505.575 37.3111 505.575H559.601C560.261 505.575 560.791 505.045 560.791 504.385C560.791 503.725 560.261 503.195 559.601 503.195H37.3111C36.6511 503.195 36.121 503.725 36.121 504.385Z" fill="#3F3D56" />
                        <path d="M164.369 222.297C164.227 222.297 164.086 222.291 163.944 222.282C155.575 221.745 126.939 217.693 109.843 188.135C108.435 185.701 108.712 182.607 110.534 180.436L142.194 142.714C143.488 141.172 145.488 140.283 147.514 140.307C148.914 140.341 152.229 140.694 152.872 143.25C156.676 158.346 172.736 176.097 192.05 178.449C194.008 178.687 195.579 180.434 196.254 183.121C196.78 185.213 196.294 187.369 194.919 189.037L169.557 219.835C168.268 221.4 166.377 222.296 164.369 222.296V222.297ZM147.392 141.825C145.845 141.825 144.341 142.518 143.357 143.69L111.697 181.412C110.284 183.095 110.068 185.491 111.157 187.374C127.876 216.281 155.863 220.242 164.042 220.767C165.712 220.879 167.316 220.167 168.385 218.87L193.747 188.072C194.812 186.78 195.189 185.111 194.781 183.491C194.383 181.905 193.408 180.144 191.866 179.956C171.913 177.526 155.326 159.203 151.4 143.62C151.082 142.359 149.168 141.866 147.482 141.826C147.452 141.825 147.422 141.825 147.392 141.825H147.392Z" fill="#3F3D56" />
                        <path d="M129.03 189.376L151.855 166.103C153.415 164.512 150.971 162.063 149.409 163.656L126.583 186.93C125.023 188.52 127.467 190.969 129.03 189.376Z" fill="#E6E6E6" />
                        <path d="M142.806 195.933C149.106 190.286 154.58 183.749 159.063 176.575C160.246 174.682 157.254 172.943 156.075 174.829C151.741 181.764 146.449 188.028 140.36 193.486C138.698 194.976 141.152 197.416 142.806 195.933H142.806Z" fill="#E6E6E6" />
                        <path d="M155.223 203.784C160.958 197.431 165.84 190.34 169.684 182.691C170.681 180.707 167.698 178.953 166.697 180.945C162.983 188.335 158.319 195.198 152.776 201.338C151.288 202.987 153.727 205.441 155.223 203.784H155.223Z" fill="#E6E6E6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_110_83">
                            <rect width="596.912" height="505.575" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <div className="ellipse"></div>
            </div>

        </section>
    )
}