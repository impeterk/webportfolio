export function Tag({ name }) {
  let color
  const colorToClassMap = {
    slate: 'bg-slate-400 text-slate-900',
    gray: 'bg-gray-400 text-gray-900',
    zinc: 'bg-zinc-400 text-zinc-900',
    neutral: 'bg-neutral-400 text-neutral-900',
    stone: 'bg-stone-400 text-stone-900',
    red: 'bg-red-400 text-red-900',
    orange: 'bg-orange-400 text-orange-900',
    amber: 'bg-amber-400 text-amber-900',
    yellow: 'bg-yellow-400 text-yellow-900',
    lime: 'bg-lime-400 text-lime-900 ',
    green: 'bg-green-400 text-green-900',
    emerald: 'bg-emerald-400 text-emerald-900',
    teal: 'bg-teal-400 text-teal-900 ',
    cyan: 'bg-cyan-400 text-cyan-900 ',
    sky: 'bg-sky-400 text-sky-900 ',
    blue: 'bg-blue-400 text-blue-900 ',
    indigo: 'bg-indigo-400 text-indigo-900',
    violet: 'bg-violet-400 text-violet-900',
    purple: 'bg-purple-400 text-purple-900',
    fuchsia: 'bg-fuchsia-400 text-fuchsia-900',
    pink: 'bg-pink-400 text-pink-900 ',
    rose: 'bg-rose-400 text-rose-900 '
  };

  switch (name.toLowerCase()) {
    case 'javascript':
      color = 'yellow'
      break;
    case 'blog':
      color = 'stone'
      break
    case 'react':
      color = 'cyan'
      break
    case 'astro':
      color = 'slate'
      break
    case 'svelte':
      color = 'orange'
      break
    case 'vue':
      color = 'green'
      break
    case 'project':
      color = 'red'
      break
    case 'tailwind':
      color = 'sky'
      break
    case 'typescript':
      color = 'sky'
      break
    case 'bulma':
      color = "teal"
      break
    case 'firebase':
      color = "amber"
      break
    case 'redux':
      color = "indigo"
      break
    default:
      color = 'neutral'
      break;
  }

  return (
    <a href="#" class={`rounded-md p-2 md:py-1 text-xs font-semibold ${colorToClassMap[color]} transition-all ease-in-out`}>
      {name}
    </a>
  );
}
