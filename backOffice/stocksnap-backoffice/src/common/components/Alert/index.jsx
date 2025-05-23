import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './css/Alert.css'
const Alert = ({ show = false, title, text, icon, showCancelButton = true, confirmButtonText, cancelButtonText, onConfirm, onCancel, onClose, ...swalProps }) => {
    const swalInstance = useRef(null);
    useEffect(() => {
        if (show && !swalInstance.current) {
            swalInstance.current = Swal.fire({
                title,
                html: text,
                icon: icon || 'error',
                showCancelButton: showCancelButton,
                confirmButtonText: confirmButtonText || 'OK',
                cancelButtonText: cancelButtonText || 'Cancelar',
                showCloseButton: true,  // Botón X
                allowOutsideClick: false,  // No cerrar al hacer click fuera
                allowEscapeKey: false,  // No cerrar con ESC
                focusConfirm: false,
                customClass: {
                    closeButton: 'swal-close-button',  // Clase para estilizar el botón X
                    htmlContainer: 'text-center'
                },
                ...swalProps
            }).then(result => {
                if (result.isConfirmed) { onConfirm?.(); }
                else if (result.dismiss === Swal.DismissReason.cancel || result.dismiss === Swal.DismissReason.close) {
                    onCancel?.();
                }
                onClose?.();
                swalInstance.current = null;
            });
        }

        return () => {
            if (swalInstance.current) {
                swalInstance.current.close();
                swalInstance.current = null;
            }
        };
    }, [cancelButtonText, confirmButtonText, icon, onCancel, onClose, onConfirm, show, showCancelButton, swalProps, text, title]);

    return null;
};

export default Alert;