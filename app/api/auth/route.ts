import { getConnection } from '@/lib/db';
import { plans } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { db } = await getConnection();
    const fetchPlans = await db.select().from(plans);
    return new Response(JSON.stringify(fetchPlans), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Plans' }), {
      status: 500,
      headers: {
        'Content-Type': 'appliaction/json',
      },
    });
  }
}

// CREATE NEW PLANS
export async function POST(request: Request) {
  try {
    const { db } = await getConnection();
    const res = await request.json();

    // TODO : server side validation for request body

    // INSERT NEW DATA IN DB
    try {
      const data = await db.insert(plans).values(res).returning();
      return new Response(
        JSON.stringify({
          message: 'SUccessfully inserted new Todo',
          newTodo: data,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (dbError) {
      console.log('Database insertion error: ', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to insert new Plan' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('Request handling error:', error);
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function PUT(request: Request) {}

export async function DELETE() {}
