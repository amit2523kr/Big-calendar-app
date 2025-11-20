import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarGraph from './BarGraph';
import './DataModal.css';
import { setShowModal } from '../redux/calendarSlice';

const DataModal = () => {
  const dispatch = useDispatch();
  const { showModal, selectedDate, selectedDateData } = useSelector(state => state.calendar);

  const handleClose = () => {
    dispatch(setShowModal(false));
  };

  if (!showModal) return null;
  const selectedDateObj = selectedDate ? new Date(selectedDate) : null;
  
  const formattedDate = selectedDateObj ? selectedDateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Data for {formattedDate}</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        
        <div className="modal-body">
          {selectedDateData ? (
            <div className="data-content">
              <p className="data-summary">
                Found {selectedDateData.length} data points for this date
              </p>
              <BarGraph data={selectedDateData} />
              <div className="data-table">
                <h4>Detailed Data:</h4>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDateData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.user}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="no-data">
              <div className="warning-icon">⚠️</div>
              <h3>No Data Found</h3>
              <p>No data available for the selected date: {formattedDate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataModal;