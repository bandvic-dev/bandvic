import Link from "next/link"
import Image from 'next/image'

export function Socials() {
    return (
        <div className="socials-wrapper">
        <ul className="socials">
          <li className="socials__item">
            <Link href="https://www.linkedin.com/in/andrei-balanco-251714185/">
              <a className="socials__link" title="Watch my Linkedin" target="_blank">
                <Image src="/images/linkedin-icon.svg" width="40px" height="40px" alt="Linkedin" />
              </a>
            </Link>
          </li>
          <li className="socials__item">
            <Link href="https://www.instagram.com/andrei_balanco/">
              <a className="socials__link" title="Watch my Instagram" target="_blank">
                <Image src="/images/instagram-icon.svg" width="40px" height="40px" alt="Instagram" />
              </a>
            </Link>
          </li>
          <li className="socials__item">
            <Link href="https://github.com/bandvic-dev">
              <a className="socials__link" title="Watch my Github" target="_blank">
                <Image src="/images/github-icon.svg" width="40px" height="40px" alt="Github" />
              </a>
            </Link>
          </li>
          <li className="socials__item">
            <Link href="mailto:bandvic@mail.ru">
              <a className="socials__link" title="Write me Message" target="_blank">
                <Image src="/images/mail-icon.svg" width="40px" height="40px" alt="Mail" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default Socials


