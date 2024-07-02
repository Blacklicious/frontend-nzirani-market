'use client';
import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const d3Container = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const params = {
                latitude: 12.456578972800937,
                longitude: -7.875310269000762,
                hourly: "temperature_2m"
            };
            const query = new URLSearchParams(params).toString();
            const url = `https://api.open-meteo.com/v1/forecast?${query}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.hourly) {
                    setWeatherData({
                        times: data.hourly.time.map(t => new Date(t)),
                        temperatures: data.hourly.temperature_2m
                    });
                }
            } catch (error) {
                console.error('Failed to fetch weather data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (weatherData && d3Container.current) {
            const svg = d3.select(d3Container.current);

            const margin = { top: 10, right: 30, bottom: 40, left: 25 },
                width = 480 - margin.left - margin.right,
                height = 165 - margin.top - margin.bottom;

            svg.selectAll("*").remove();

            const chart = svg
                .append('g')
                .attr("transform", `translate(${margin.left},${margin.top})`);

            const x = d3.scaleTime()
                .domain(d3.extent(weatherData.times))
                .range([0, width]);

            const xAxis = d3.axisBottom(x)
                .ticks(d3.timeDay.every(1))
                .tickFormat(d3.timeFormat("%m-%d"));

            chart.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(xAxis)
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

            const y = d3.scaleLinear()
                .domain([0, d3.max(weatherData.temperatures)])
                .range([height, 0]);

            chart.append("g").call(d3.axisLeft(y));

            chart.selectAll(".bar")
                .data(weatherData.temperatures)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d, i) => x(weatherData.times[i]))
                .attr("y", d => y(d))
                .attr("width", 10) // fixed width for each bar
                .attr("height", d => height - y(d))
                .attr("fill", "#69b3a2");
        }
    }, [weatherData]);

    return (
        <div className='h-[100%] border-black rounded-md'>
            <svg ref={d3Container} width="99%" height="100%" />
        </div>
    );
};

export default WeatherWidget;
