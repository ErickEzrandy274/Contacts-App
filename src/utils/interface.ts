import React, { SetStateAction } from "react"

export interface ContactItemBodyProps {
    name: string
    tag: string
}

export interface ContactItemImageProps {
    imageUrl: string
}

interface SetContactsAction {
    setContacts: React.Dispatch<SetStateAction<any[]>>
}

interface DeleteFunctionProps {
    deleteContact: (index: string) => void
}

export interface ContactItemProps extends ContactItemBodyProps, ContactItemImageProps, SetContactsAction, DeleteFunctionProps { 
    id: string
} 

export interface ContactListProps extends DeleteFunctionProps {
    contacts: any[]
}

export interface DeleteButtonProps extends DeleteFunctionProps {
    index: string
}

export interface InputProps {
    name: string
    placeholder: string
    value: string
    handleChange: (e:any) => void
}

export interface ContactInputProps {
    addContact: (name: string, tag: string) => void
}

export interface SubmitProps extends ContactInputProps, ContactItemBodyProps { 
    setField: React.Dispatch<SetStateAction<{ name: string; tag: string; }>>
}

export interface FailedAlertProps {
    message: string
}