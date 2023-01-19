import { Button, Modal, Select } from 'flowbite-react'
import React, { useState } from 'react'

interface Props {
    header: string,
    block1: string,
    block2: string,
    modalActive: boolean;
    toggle: () => void;
}

export const BlexModal: React.FC<Props> = ({ header, block1, block2, modalActive, toggle }) => {

    return (
        <>
            <Modal
                show={modalActive}
                position="center"
                onClose={toggle}
            >
                <Modal.Header>
                    {header}
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {block1}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {block2}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
