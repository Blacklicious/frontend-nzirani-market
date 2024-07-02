'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as d3 from "d3";
import WeatherWidget from '../../../../../components/WeatherWidget';
import HealthData from './../healths';
import Expenses from './../expenses';
import Storage from './../storages';
import Sales from './../sales';
import Tasks from './../tasks';

// Define a type for the mouse position state
interface MousePosition {
	x: number;
	y: number;
}

// Use the operations data in your component
const page = () => {
	const width = 330;
	const height = 500;
	const circleRadius = 40;
	// useState hook typed with the MousePosition interface
	const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

	// Type the event parameter as React.MouseEvent for a DOM element
	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		setMousePosition({ x: clientX, y: clientY-340 });
	};

	return (
		<div className=' w-[100%] h-min text-black mt-[60px] bg-gray-200 p-2' >
			<div className='h-[150px] mb-4 bg-black rounded-md '>
				<img className='w-[100%] h-[100%] rounded-md' src="/img/covers/cobb500-002.png" alt="" />
			</div>
			< Sales />
			< WeatherWidget />
			< HealthData />
			< Storage />
			< Expenses />
			< Tasks />
			
		</div>
	)
}

export default page;
