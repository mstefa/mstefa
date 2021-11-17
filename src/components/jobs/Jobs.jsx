import {React, useState, useEffect, useRef} from 'react'
import {StyledJobs, StyledTabList, StyledTabButton,StyledHighlight, StyledTabPanels, StyledTabPanel } from './StyledJobs'
// import { KEY_CODES } from '@utils';


export default function Jobs() {

  let jobsData = [
    {
    company: "meli",
    title: "dev",
    url: "https://mercadolibre.com/",
    range: "2021"
    },
    {
      company: "henry",
      title: "super dev",
      url: "https://mercadolibre.com/",
      range: "2022"
      }
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  // const revealContainer = useRef(null);
  // const prefersReducedMotion = usePrefersReducedMotion();

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);

  return (
    <StyledJobs>
        <h2 id='projects'> <i class="far fa-paper-plane"></i>Where I’ve Worked</h2>
        <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs"> {/*onKeyDown={e => onKeyDown(e)} */}
          {jobsData && jobsData.map((e, i) => {
              const  company  = e.company;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map((e, i) => {
              const { title, url, company, range } = e;

              return (
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                  </StyledTabPanel>
              );
            })}
        </StyledTabPanels>
      </div>
      {/* <div className='description-container'>
        <h3>Software enginer @ <a href="https://mercadolibre.com/">Mercado Libre</a></h3>
        <p>
        Part of the CX-IT team, maintaining CRM channels services, such as phone calls and messaging, built on Java and JavaScript.
        Currently, working on replacing the old legacy monolith chat application with a micro-services structure, writing mainly in Golang and JavaScript.
        </p>
        <ul>
            <li>GoLang</li>
            <li>JavaScript</li>
            <li>Microservices</li>
            <li>Hexagonal Architecture</li>
          </ul>
      </div> */}
    </StyledJobs>
  )
}
