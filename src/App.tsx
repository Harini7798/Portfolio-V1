import { Code2, Coffee, Github, Mail, FileCode2, BookCopy as BookCode, Globe, Trophy, Laptop, Instagram } from 'lucide-react'
import React from 'react'

function App() {
  console.log('App component rendered');
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full bg-black">
        <div className="container mx-auto px-4 py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-purple-500">
                Harini
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-purple-700"></div>
            </div>
            
            <p className="text-2xl text-purple-200 max-w-2xl font-light">
              Data Analytics Enthusiast | Problem Solver | Continuous Learner
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-8 py-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 transition-all">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Contact Me</span>
              </a>
              <a href="https://www.instagram.com/itsjustt.harini/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-500 rounded-lg shadow-md hover:bg-purple-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-neutral-900 py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-purple-500">About Me</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto font-light">
                Hey there! I'm a second-year college student with a growing passion for data analytics. I love exploring patterns in data and finding meaningful insights. Currently learning the ropes of data analysis and visualization, and I'm excited to dive deeper into this fascinating field!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
                <Coffee className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-purple-500 mb-2">What I'm Learning</h3>
                <p className="text-lg text-purple-200 font-light">Python, SQL, Data Visualization, Statistical Analysis, and exploring data analytics tools</p>
              </div>
              <div className="p-8 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
                <Code2 className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-purple-500 mb-2">My Journey</h3>
                <p className="text-lg text-purple-200 font-light">Starting my journey in data analytics, excited to learn how to turn raw data into meaningful insights!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full bg-black py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-purple-500">Featured Projects</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto font-light">
              Here are some of my recent works that showcase my skills and passion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 rounded-lg overflow-hidden group">
              <div className="aspect-video bg-purple-900 flex items-center justify-center">
                <Laptop className="w-16 h-16 text-purple-200" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">E-Commerce Platform</h3>
                <p className="text-purple-200 font-light">A full-stack e-commerce solution with React, Node.js, and MongoDB</p>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">View Demo</a>
                  <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 rounded-lg overflow-hidden group">
              <div className="aspect-video bg-purple-900 flex items-center justify-center">
                <Laptop className="w-16 h-16 text-purple-200" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">Task Management App</h3>
                <p className="text-purple-200 font-light">A real-time task management application using React and Firebase</p>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">View Demo</a>
                  <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coding Profiles Section */}
      <div className="w-full bg-neutral-900 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-purple-500">Coding Profiles</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto font-light">
              Check out my problem-solving journey across different platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="https://github.com/yourusername" 
               className="p-6 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
              <Github className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-purple-500">GitHub</h3>
              <p className="text-purple-200 font-light">Open source contributions</p>
            </a>
            
            <a href="https://leetcode.com/yourusername" 
               className="p-6 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
              <FileCode2 className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-purple-500">LeetCode</h3>
              <p className="text-purple-200 font-light">Problem solving</p>
            </a>
            
            <a href="https://www.codechef.com/users/yourusername" 
               className="p-6 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
              <Code2 className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-purple-500">CodeChef</h3>
              <p className="text-purple-200 font-light">Competitive coding</p>
            </a>
            
            <a href="https://www.hackerrank.com/yourusername" 
               className="p-6 bg-black rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all group">
              <Trophy className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-purple-500">HackerRank</h3>
              <p className="text-purple-200 font-light">Coding challenges</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App