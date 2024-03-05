import { loginGoogle, loginGithub, loginSpotify, loginGitLab } from "@/lib/actions"

function OAuthForm() {

  return (
    <>
      <form className='oauth'>
        <button formAction={loginGoogle} className="social-button">
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub} className="social-button">
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginSpotify} className="social-button">
          <img src="/spotify.svg" alt="Spotify" /> Iniciar sesión con Spotify
        </button>

        <button formAction={loginGitLab} className="social-button">
          <img src="/gitlab.svg" alt="gitlab" /> Iniciar sesión con GitLab
        </button>
      </form>

    </>
  )
}

export default OAuthForm;