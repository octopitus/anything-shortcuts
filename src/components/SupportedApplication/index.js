import React, {Component} from 'preact'
import classnames from 'classnames'

import style from './style'

const suppotedApplications = [
  {
    title: 'Sketch',
    icon: require('../../assets/icons/sketch.png'),
    enabled: true
  },
  {
    title: 'Photoshop',
    icon: require('../../assets/icons/photoshop.png'),
    enabled: true
  },
  {title: 'Illustrator', icon: require('../../assets/icons/illustrator.png')},
  {
    title: 'After Affects',
    icon: require('../../assets/icons/after-effects.png')
  },
  {title: 'Lightroom', icon: require('../../assets/icons/lightroom.png')},
  {title: 'Animate', icon: require('../../assets/icons/animate.png')},
  {title: 'Audition', icon: require('../../assets/icons/audition.png')},
  {title: 'Bridge', icon: require('../../assets/icons/bridge.png')},
  {title: 'Dreamweaver', icon: require('../../assets/icons/dreamweaver.png')},
  {
    title: 'Flash Builder',
    icon: require('../../assets/icons/flash-builder.png')
  },
  {title: 'Fuse', icon: require('../../assets/icons/fuse.png')},
  {title: 'Incopy', icon: require('../../assets/icons/incopy.png')},
  {title: 'Indesign', icon: require('../../assets/icons/indesign.png')},
  {title: 'Muse', icon: require('../../assets/icons/muse.png')},
  {title: 'Prelude', icon: require('../../assets/icons/prelude.png')},
  {title: 'Premiere Pro', icon: require('../../assets/icons/premiere-pro.png')},
  {title: 'Scout', icon: require('../../assets/icons/scout.png')},
  {title: 'Spark', icon: require('../../assets/icons/spark.png')},
  {title: 'Speedgrade', icon: require('../../assets/icons/speedgrade.png')},
  {title: 'Story Plus', icon: require('../../assets/icons/story-plus.png')},
  {
    title: 'User Experience',
    icon: require('../../assets/icons/user-experience.png')
  }
]

class SupportedApplication extends Component {
  render() {
    const suppotedApplicationComponents = suppotedApplications.map(app => {
      return (
        <div key={app.title.toLowerCase()} className="column column-25">
          <div className={style.application}>
            <img src={app.icon} />
            <span>{app.title}</span>
            {app.enabled && <a>Enabled</a>}
          </div>
        </div>
      )
    })

    const applicationListClasses = classnames('row', style.applicationList)

    return (
      <div className={style.applicationsWrapper}>
        <h5>Design</h5>
        <div className={applicationListClasses}>
          {suppotedApplicationComponents}
        </div>
      </div>
    )
  }
}

export default SupportedApplication
