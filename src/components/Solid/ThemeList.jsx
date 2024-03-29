import { createSignal, createEffect } from "solid-js"

export function ThemeList() {
  const themeArray = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]
  const [currentTheme, setCurrentTheme] = createSignal(localStorage.getItem('data-theme') || (window.matchMedia('(prefers-color-scheme: ligth)').matches ? 'dark' : 'light'))


  const handleClick = event => {
    let tmp = event.target.value
    localStorage.setItem('data-theme', tmp)
    setCurrentTheme(tmp)
  }
  createEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme())
  }, [currentTheme])

  return (
    <div className="dropdown max-lg:dropdown-end lg:dropdown-bottom xl:dropdown-end">
      <label tabindex={0} className="btn focus:btn-outline btn-ghost p-2 text-lg text-semibold text-left"><p className="max-md:hidden">Theme</p>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
      </label>
      <ul tabindex={0} className="shadow menu dropdown-content block z-[1] bg-base-100 rounded-box w-60 md:w-52 lg:w-48 xl:w-56 h-[40vh] overflow-y-auto mt-2">
        {themeArray.map(theme => (

          <li key={theme}>
            <div onClick={handleClick} value={theme} data-theme={theme} class="rounded-lg bg-base-100 w-full text-base-content hover:bg-base-100 py-4 md:py-3 my-1 flex flex-row ">
              {currentTheme() == theme && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-primary" style="fill: currentColor;"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>}


              <p value={theme} class="text-md font-bold">{theme}</p>
              <div value={theme} class="colors ml-auto flex gap-1">
                <span value={theme} class="h-8 w-3 bg-primary block rounded"></span>
                <span value={theme} class="h-8 w-3 bg-secondary block rounded"></span>
                <span value={theme} class="h-8 w-3 bg-accent block rounded"></span>
                <span value={theme} class="h-8 w-3 bg-neutral block rounded"></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
