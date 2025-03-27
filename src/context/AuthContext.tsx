'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { getSession, signIn, signOut, signUp } from '@/lib/auth';
import supabase from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: AuthError }>;
  signUp: (email: string, password: string) => Promise<{ success: boolean; error?: AuthError }>;
  signOut: () => Promise<{ success: boolean; error?: AuthError }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signIn: async () => ({ success: false }),
  signOut: async () => ({ success: false }),
  signUp: async () => ({ success: false }),
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadSession() {
      try {
        setIsLoading(true);
        const { session, user } = await getSession();
        setSession(session);
        setUser(user);
      } catch (error) {
        console.error('Error loading session:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSession();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user || null);
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const result = await signIn(email, password);
    return result;
  };

  const logout = async () => {
    const result = await signOut();
    return result;
  };

  const register = async (email: string, password: string) => {
    const result = await signUp(email, password);
    return result;
  };

  const value = {
    user,
    session,
    isLoading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 