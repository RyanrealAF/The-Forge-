export enum ViewState {
  MANIFESTO = 'MANIFESTO',
  PROTOCOLS = 'PROTOCOLS',
  ORACLE = 'ORACLE',
  ARCHIVE = 'ARCHIVE'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
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