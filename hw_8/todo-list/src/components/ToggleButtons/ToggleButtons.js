import React from 'react';

function ToggleButtons({ markAllAs }) {
  return (
    <div>
      <button
        className="btn btn-success w-100 mb-1 font-weight-bold"
        onClick={() => markAllAs('packed')}
      >
        Mark All As Packed
      </button>
      <button
        className="btn btn-warning w-100 font-weight-bold"
        onClick={() => markAllAs('unpacked')}
      >
        Mark All As Unpacked
      </button>
    </div>
  );
}

export default ToggleButtons;
