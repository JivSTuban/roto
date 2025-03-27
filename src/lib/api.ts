import supabase from './supabase';

// Contact form submission
export async function submitContactForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  interest: string;
}) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
}

// Lead generation form submission
export async function submitLeadForm(formData: {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  leadGoal: string;
}) {
  try {
    const { data, error } = await supabase
      .from('lead_submissions')
      .insert([formData]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting lead form:', error);
    return { success: false, error };
  }
}

// Get blog posts
export async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { success: false, error };
  }
}

// Get testimonials
export async function getTestimonials() {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*');
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return { success: false, error };
  }
} 