import { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.scss';

interface WorkModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const WorkModal: FC<WorkModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      show={isVisible}
      onHide={onClose}
      className="work-modal"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Service node</Modal.Title>
      </Modal.Header>
      <Modal.Body className="work-modal-body">
        <p style={{ fontSize: 12 }}>
          <b>Company description: </b>Supporting service companies, equipment
          and property owners to work smarter and more efficiently with their
          service and maintenance work
        </p>
        <p>
          <h3>UI Components Designing & Application Interface Coding</h3>
          <ul>
            <li>
              Identified <b>web-based user interactions</b> and developed
              highly-responsive user interface components via{' '}
              <b>React concepts</b>
            </li>
            <li>
              Translated <b>designs & wireframes</b> into high-quality code and
              wrote application interface code via JavaScript following{' '}
              <b>React.js workflows</b>
            </li>
          </ul>
        </p>
        <p>
          <h3>Code Debugging & Front-end Architecture</h3>
          <ul>
            <li>
              Troubleshot <b>interface software</b> and{' '}
              <b>debugged application codes</b> to improve functionality and
              performance.
            </li>
            <li>
              Developed and implemented <b>front-end architecture</b> to support
              user interface concepts with <b>100% accuracy.</b>
            </li>
          </ul>
        </p>

        <p>
          <h3>Performance Optimization & Features Development</h3>
          <ul>
            <li>
              Monitored and improved <b>front-end performance</b> and documented
              application changes & worked on updates.
            </li>
            <li>
              Developed the <b>latest user-facing features</b> using React.js
              and built reusable components & front-end libraries for future
              use.
            </li>
            <li>
              Optimized components for <b>maximum performance</b> across a vast
              array of web-capable devices and browsers.
            </li>
          </ul>
        </p>

        <p>
          <h3>Application Development & UI Designing</h3>
          <ul>
            <li>
              Coordinated with the development team of 6 to discuss{' '}
              <b>user interface ideas</b> and applications.
            </li>
            <li>
              Reviewed <b>application requirements</b> and{' '}
              <b>interface designs</b> to ensure compatibility with existing
              applications
            </li>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkModal;
