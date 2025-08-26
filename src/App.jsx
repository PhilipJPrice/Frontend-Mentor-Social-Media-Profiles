import React from 'react'
import './index.css'
import avatar from './assets/images/avatar-jessica.jpeg';

export function App() {
	return (
		<div class="flex min-h-screen items-center justify-center">
			<div class="flex flex-col items-center rounded-xl banner p-10">
				<img class="rounded-full w-18 mb-6" src={avatar} alt="" />
				<p class="inter-semi text-lg text-slate-300 mb-1">Jessica Randall</p>
				<p class="inter-bold text-xs text-lime-300 mb-5">London, United Kingdom</p>
				<p class="inter-full font-light text-sm text-slate-300 mb-5"><q>Front-end developer and avid reader.</q></p>
				<a class="inter-bold text-sm w-72 p-2 text-slate-300 button rounded-md mb-4 text-center hover:text-neutral-700" href="#">Github</a>
				<a class="inter-bold text-sm w-72 p-2 text-slate-300 button rounded-md mb-4 text-center hover:text-neutral-700" href="#">Frontend Mentor</a>
				<a class="inter-bold text-sm w-72 p-2 text-slate-300 button rounded-md mb-4 text-center hover:text-neutral-700" href="#">LinkedIn</a>
				<a class="inter-bold text-sm w-72 p-2 text-slate-300 button rounded-md mb-4 text-center hover:text-neutral-700" href="#">Twitter</a>
				<a class="inter-bold text-sm w-72 p-2 text-slate-300 button rounded-md text-center hover:text-neutral-700" href="#">Instagram</a>
			</div>
		</div>
	)
}
