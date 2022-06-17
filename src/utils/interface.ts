export interface ContactItemBodyProps {
    name: string
    tag: string
}

export interface ContactItemImageProps {
    imageUrl: string
}

export interface ContactItemProps extends ContactItemBodyProps, ContactItemImageProps { } 

export interface ContactListProps {
    contacts: any[]
}