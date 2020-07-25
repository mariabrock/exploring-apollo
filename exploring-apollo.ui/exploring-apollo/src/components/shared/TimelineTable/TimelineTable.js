import React from 'react';
import Modal from '../../shared/ContentModal/ContentModal';
import M from "materialize-css/dist/js/materialize.min.js";

import './TimelineTable.scss';


class TimelineTable extends React.Component {
  state = {
    content: [],
    modalOpen: false,
  }

  componentDidMount() {
    this.openModal();
    };

    openModal() {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
    }

  render() {
    const { openModal } = this.setState;
    const { events, content } = this.props;
    return (
      
      <div className="container">
          <div className="container">
            <table className="responsive-table white-text">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date & Time</th>
                  <th>Media</th>
                </tr>
              </thead>

              <tbody>
              {events == null ? [] : events.map((events) =>
                <tr key={events.id}>
                  <td>{events.eventName}</td>
                  <td>{events.eventTime}</td>
                  {/* <td onClick={openModal()} className="btn-floating blue darken-2 modal-trigger"><i className="fas fa-play-circle 2X">{content == null ? [] : content.map((content) =><Modal key={content.id} content={content} />)}</i></td> */}
                </tr>
              )}

              </tbody>
            </table>

          </div>

      </div>
    );
  }
}

export default TimelineTable;