(() => {
  const draggables = document.querySelectorAll('.draggable');
  const canvas = document.getElementById('canvas');

  draggables.forEach(elem => {
    elem.addEventListener('mousedown', function(e) {
      e.preventDefault();

      const elemRect = elem.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
	  
      let shiftX = e.clientX - elemRect.left;
      let shiftY = e.clientY - elemRect.top;

      elem.style.zIndex = 1000;
      elem.classList.add('is-dragging'); 

      function moveAt(clientX, clientY) {
        let newLeft = clientX - canvasRect.left - shiftX;
        let newTop = clientY - canvasRect.top - shiftY;

        const currentRect = elem.getBoundingClientRect();
        
        let rightEdge = canvas.offsetWidth - elem.offsetWidth;
        let bottomEdge = canvas.offsetHeight - elem.offsetHeight;

        if (newLeft < 0) newLeft = 0;
        if (newLeft > rightEdge) newLeft = rightEdge;
        
        if (newTop < 0) newTop = 0;
        if (newTop > bottomEdge) newTop = bottomEdge;

        elem.style.left = newLeft + 'px';
        elem.style.top = newTop + 'px';
      }

      moveAt(e.clientX, e.clientY);

      function onMouseMove(e) {
        moveAt(e.clientX, e.clientY);
      }

      document.addEventListener('mousemove', onMouseMove);

      document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
        elem.style.zIndex = 10;
        elem.classList.remove('is-dragging');
      };
    });

    elem.ondragstart = function() {
      return false;
    };
  });
})();