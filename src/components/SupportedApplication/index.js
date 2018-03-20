// @flow
import React, {Component} from 'preact'
import classnames from 'classnames'

import style from './style'

const suppotedApplications = [
  {title: 'Sketch', icon: require('../../assets/icons/sketch.png')},
  {title: 'Photoshop', icon: require('../../assets/icons/photoshop.png')},
  {title: 'Illustrator', icon: require('../../assets/icons/illustrator.png')},
  {
    title: 'After Affects',
    icon: require('../../assets/icons/after-effects.png')
  },
  {title: 'Lightroom', icon: require('../../assets/icons/lightroom.png')}
]

class SupportedApplication extends Component {
  render() {
    const suppotedApplicationComponents = suppotedApplications.map(app => {
      return (
        <div key={app.title.toLowerCase()} className="column column-33">
          <div className={style.application}>
            <img src={app.icon} />
            {app.title}
          </div>
        </div>
      )
    })

    const applicationListClasses = classnames('row', style.applicationList)

    return (
      <div key="content" className={style.applicationsWrapper}>
        <h5 key="header">Currently supported applications</h5>
        <div className={applicationListClasses}>
          {suppotedApplicationComponents}
        </div>
      </div>
    )
  }
}

export default SupportedApplication
