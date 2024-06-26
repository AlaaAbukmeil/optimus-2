import { useDrag, useDrop } from "react-dnd";

export const DraggableComponent = ({ id, children }: any) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { id },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="unassigned-device btn btn-secondary">
      {children}
    </div>
  );
};

export const DroppableRow = ({ rowId, onDrop, onContextMenu, index, handleExpandRow, children }: any) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item: any, monitor: any) => {
      onDrop(item.id, rowId);
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
  return (
    <tr ref={drop} style={{ background: isOver ? "#EFD9A0" : "white" }} className="droppable-row" onContextMenu={onContextMenu} onClick={(event) => handleExpandRow(event, index)}>
      {children}
    </tr>
  );
};
export const DroppableElement= ({ rowId, onDrop, onContextMenu, index, handleExpandRow, children }: any) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item: any, monitor: any) => {
      onDrop(item.id, rowId);
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
  return (
    <div ref={drop} style={{ background: isOver ? "#EFD9A0" : "white" }} className="droppable-row" onContextMenu={onContextMenu} onClick={(event) => handleExpandRow(event, index)}>
      {children}
    </div>
  );
};

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="close-icon">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ffffff"></path>{" "}
      </g>
    </svg>
  );
}
