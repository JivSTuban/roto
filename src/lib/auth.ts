import supabase from './supabase';
import { Session, User } from '@supabase/supabase-js';

// Sign up a new user
export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error signing up:', error);
    return { success: false, error };
  }
}

// Sign in a user
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error signing in:', error);
    return { success: false, error };
  }
}

// Sign out the current user
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
}

// Get the current session
export async function getSession(): Promise<{ session: Session | null; user: User | null }> {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    
    return { 
      session: data.session,
      user: data.session?.user || null 
    };
  } catch (error) {
    console.error('Error getting session:', error);
    return { session: null, user: null };
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error resetting password:', error);
    return { success: false, error };
  }
}

// Update password
export async function updatePassword(newPassword: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error updating password:', error);
    return { success: false, error };
  }
} 