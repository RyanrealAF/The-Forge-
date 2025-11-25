export enum ViewState {
  MANIFESTO = 'MANIFESTO',
  PROTOCOLS = 'PROTOCOLS',
  ARCHIVE = 'ARCHIVE',
  // FIX: Add ORACLE view state to navigate to the chat component.
  ORACLE = 'ORACLE',
}

export interface Artifact {
  id: string;
  title: string;
  category: string;
  content: string;
  timestamp: string;
}

export interface DoctrinePoint {
  title: string;
  description: string;
}

export interface ProtocolSection {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  roles?: { name: string; description: string }[];
}

// FIX: Add ChatMessage interface to resolve the error in OracleChat.tsx.
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
