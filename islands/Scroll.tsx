import { Head } from "$fresh/runtime.ts";
import { effect, useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export default function Scroll() {
  const input = useRef(null);
  const input2 = useRef(null);
  const selected = useSignal(0);

  effect(() => {
    let refs = [input, input2];
    if (refs[selected.value].current) {
      refs[selected.value].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  });

  const changeSelection = (index) => {
    selected.value = index;
  };

  return (
    <>
      <div style={{ background: "green" }}>
        <span onClick={() => changeSelection(0)}>Working</span>{" "}
        <span onClick={() => changeSelection(1)}>Catalogue</span>{" "}
        <span>Contact</span>
      </div>
      <div ref={input}>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
        <h2 class="div p-10 m-10">hello</h2>
      </div>
      <div ref={input2}>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
        <div class="div p-10 m-10">hello2</div>
      </div>
    </>
  );
}
