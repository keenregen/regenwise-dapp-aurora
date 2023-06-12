import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Form, Modal } from 'react-bootstrap';
import { User } from '@src/models/user';
import DashboardHeader from '../../shared/DashboardHeader';

interface Props {
  user: User;
  onChangeUserDetails: (val: User) => void;
}

export default function AccountDetails({ user, onChangeUserDetails }: Props) {
  const [isEditable, setIsEditable] = useState(false);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<User>({
    id: '',
    name: '',
    surname: '',
    profession: '',
    email: '',
    date: new Date(),
    image: '',
    accountType: '',
  } as User);

  useEffect(() => {
    if (user !== undefined) {
      setFormValues(user);
    }
  }, [user]);

  const handleFormInput = (e: any) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const saveAccountDetails = () => {
    setIsEditable(false);
    onChangeUserDetails(formValues);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${styles.main_container}`}>
      <div className={`${styles.wrapper}`}>
        <DashboardHeader header="ACCOUNT DETAILS" />
        <div className={`${styles.content}`}>
          <div className={`${styles.image_container}`}>
            <Image
              width={350}
              height={350}
              src={`/${formValues?.image}`}
              alt="user_image"
            />
          </div>
          <div className={`${styles.information_container}`}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="font-extrabold">User Name</Form.Label>
              <Form.Control
                type="text"
                value={formValues?.name ?? ''}
                onChange={handleFormInput}
                placeholder="Enter your name"
                readOnly={!isEditable}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname">
              <Form.Label className="font-extrabold">User Surname</Form.Label>
              <Form.Control
                type="text"
                value={formValues?.surname ?? ''}
                onChange={handleFormInput}
                placeholder="Enter your surname"
                readOnly={!isEditable}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="font-extrabold">User email</Form.Label>
              <Form.Control
                type="email"
                value={formValues?.email ?? ''}
                onChange={handleFormInput}
                placeholder="Enter your email"
                readOnly={!isEditable}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="profession">
              <Form.Label className="font-extrabold">Profession</Form.Label>
              <Form.Control
                type="text"
                value={formValues?.profession ?? ''}
                onChange={handleFormInput}
                readOnly={!isEditable}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label className="font-extrabold">Account Type</Form.Label>
              <Form.Control
                type="text"
                value={formValues?.accountType?.toLocaleUpperCase() ?? ''}
                onChange={handleFormInput}
                disabled
              />
            </Form.Group>
            <div className="flex justify-center gap-2">
              {!isEditable ? (
                <Button
                  style={{
                    borderRadius: '20px',
                    width: '130px',
                    padding: '0.4em 2em',
                  }}
                  variant="success"
                  onClick={() => setIsEditable(true)}
                >
                  EDIT
                </Button>
              ) : (
                <>
                  <Button
                    style={{
                      borderRadius: '20px',
                      width: '130px',
                      padding: '0.4em 2em',
                    }}
                    variant="success"
                    onClick={saveAccountDetails}
                  >
                    SAVE
                  </Button>
                  <Button
                    style={{
                      borderRadius: '20px',
                      width: '130px',
                      padding: '0.4em 2em',
                    }}
                    variant="dark"
                    onClick={() => setIsEditable(false)}
                  >
                    CANCEL
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal show={open} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Not yet ready!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This functionality is not yet ready. We are working on it!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
