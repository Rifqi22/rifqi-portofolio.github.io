import instagramIcon from "/assets/icon/instagram-green.png";
import facebookIcon from "/assets/icon/facebook-green.png";
import linkedinIcon from "/assets/icon/linkedin-green.png";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="italic text-white/80">Find me on social media.</p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            className="w-12 h-12 bg-center bg-no-repeat bg-[length:80%]"
            style={{ backgroundImage: `url(${instagramIcon})` }}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/iqiiiiiiiiii/"
            aria-label="Instagram"
          />
          <a
            className="w-12 h-12 bg-center bg-no-repeat bg-[length:80%]"
            style={{ backgroundImage: `url(${facebookIcon})` }}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/rifqi.naufal.58760/"
            aria-label="Facebook"
          />
          <a
            className="w-12 h-12 bg-center bg-no-repeat bg-[length:80%]"
            style={{ backgroundImage: `url(${linkedinIcon})` }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mochammadrifqinaufalalfayyadh/"
            aria-label="LinkedIn"
          />
        </div>

        <div className="mt-10 text-sm text-white/70">
          &copy; Copyright <b>MyResume</b>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
