import { useEffect, useState, type FormEvent } from 'react';

const field = 'block w-full rounded border border-slate-400 bg-white p-2 dark:bg-slate-950';

export default function RequestDemo() {
  const [ready, setReady] = useState(false);
  const [preview, setPreview] = useState('');

  useEffect(() => setReady(true), []);

  function showPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    setPreview(`Song in ${fields.get('language')} for ${fields.get('occasion')}.`);
  }

  return (
    // The form stays disabled until hydration attaches the submit handler.
    <form className="space-y-4" onSubmit={showPreview}>
      <fieldset disabled={!ready} className="space-y-4">
        <label className="block">
          Fictional occasion
          <select className={field} name="occasion">
            <option>a fictional birthday party</option>
            <option>an imaginary graduation</option>
          </select>
        </label>
        <label className="block">
          Song language
          <select className={field} name="language">
            <option>Spanish</option>
            <option>English</option>
          </select>
        </label>
        <button type="submit" className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 disabled:opacity-50">
          Preview request
        </button>
      </fieldset>
      <p role="status">{ready ? preview : 'The preview requires JavaScript.'}</p>
    </form>
  );
}
