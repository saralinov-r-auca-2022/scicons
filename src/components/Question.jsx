import { createSignal } from "solid-js";

const Question = () => {
  const [answered, setAnswered] = createSignal(false);
  const [link, setLink] = createSignal("#3")

  const ask = (value) => {
    setAnswered(true);
  }
  
  return (
    <div class='absolute w-[50vh] h-[15vh]'>
        <div class='absolute w-full h-2/5 flex justify-end items-center gap-3'>
          <div class="w-3/5 h-full rounded-2xl border border-gray-200">
            <textarea onKeyDown={(e) => e.key == "Enter" ? (e.preventDefault(), e.stopPropagation(), ask(e.target.value)) : ""}
             class="text-white p-2 resize-none h-full focus:outline-none text-right overflow-hidden" placeholder="Input to start"></textarea>
          </div>
        </div>
        <Show when={answered()}>
          <div class="absolute w-3/5 h-2/5 bottom-0 left-0 rounded-2xl border border-gray-200 p-2 text-white">
           Ok! Look 👉  <a class="text-sky-700" href={link()}>Here</a>
          </div>
        </Show>
    </div>
  )
}

export default Question;