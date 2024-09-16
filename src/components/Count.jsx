import React from 'react'
import Section from './Section'
import '../assets/js/script.js'
import CountUp from "react-countup";

const Count = () => {
  return (
    
    <Section className="section">
        <div className="container section">
          <div className="row row-25 text-center">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-time"></span>
                <CountUp
                    className="counter text-white"
                    start={0}
                    end={2022}
                    duration={2}
                    useEasing={true}
                    
                    />
                </div>
                <div className="counter-classic-title">Year of Establishment</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-folder"></span>
                <CountUp
                    className="counter text-white"
                    start={0}
                    end={15}
                    duration={2}
                    useEasing={true}
                    
                    />
                    <span className="counter text-white">+</span>
                </div>
                <div className="counter-classic-title">Successful Projects</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-users"></span>
                <CountUp
                    className="counter text-white"
                    start={0}
                    end={847}
                    duration={2}
                    useEasing={true}
                    
                    />
                <span className="symbol text-white">+</span>
                </div>
                <div className="counter-classic-title">Global Partners</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-group"></span>
                <CountUp
                    className="counter text-white"
                    start={0}
                    end={20}
                    duration={2}
                    useEasing={true}
                    
                    />
                <span className="counter text-white">+</span>
                </div>
                <div className="counter-classic-title">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
  )
}

export default Count