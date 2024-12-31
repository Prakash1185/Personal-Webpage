import React from 'react'
import SkillBox from './SkillBox'
import html from "../assets/html.webp"
import css from "../assets/css.webp"
import js from "../assets/js.webp"
import react from "../assets/react.webp"
import node from "../assets/node.webp"
import mongo from "../assets/mongo.webp"
import tailwind from "../assets/tailwind.webp"
import github from "../assets/github.webp"
import npm from "../assets/npm.webp"
import express from "../assets/express.png"
import bootstrap from "../assets/bootstrap.webp"
import vscode from "../assets/vscode.webp"

const Skills = () => {
    return (
        <div id='skills' className='pt-10 bg-background px-10 sm:px-14 md:px-16 pb-16 dark:bg-gray-950'>

            <div className="relative flex items-center justify-center gap-2  pt-14">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium dark:text-gray-100">Skills</div>
                <div className="absolute  opacity-10 -top-2 text-[3.5rem] md:text-[4.5rem] font-bold tracking-wider dark:text-gray-100 dark:opacity-5">My Skills</div>
            </div>

            <h1 className='text-5xl font-semibold text-center tracking-wider pt-2 dark:text-gray-100'>My <span className='text-bluee font-medium'>Skills</span></h1>

            <div className='flex gap-10 flex-wrap justify-center items-center pt-10'>
                <SkillBox image={html} skill='HTML' />
                <SkillBox image={css} skill='CSS' />
                <SkillBox image={js} skill='Javascript' />
                <SkillBox image={react} skill='React' />
                <SkillBox image={node} skill='NodeJs' />
                <SkillBox image={mongo} skill='MongoDB' />
                <SkillBox image={express} skill='ExpressJs' />
                <SkillBox image={tailwind} skill='Tailwind' />
                <SkillBox image={bootstrap} skill='Bootstrap' />
                <SkillBox image={github} skill='Github' />
                <SkillBox image={npm} skill='Npm' />
                <SkillBox image={vscode} skill='Vscode' />
            </div>

        </div>
    )
}

export default Skills