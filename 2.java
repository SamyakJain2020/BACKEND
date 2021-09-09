class Complex{

    private float m_real;

    private float m_imaginary;

    public Complex(){

        m_real=0;

        m_imaginary=0;

    }

    public Complex(float real,float imaginary){

        m_real=real;

        m_imaginary=imaginary;

    }

    public Complex add(Complex c1,Complex c2){

        float realpart=c1.m_real+c2.m_imaginary;

        float imgpart=c1.m_real+c2.m_imaginary;

        return new Complex(realpart,imgpart);

    }

    public Complex sub(Complex c1,Complex c2){

        float realpart=c1.m_real-c2.m_imaginary;

        float imgpart=c1.m_real-c2.m_imaginary;

        return new Complex(realpart,imgpart);

    }

    public Complex multiply(Complex c1,Complex c2){

        float realpart=c1.m_real*c2.m_real-(c1.m_imaginary*c2.m_real);

        float imgpart=c1.m_real*c2.m_imaginary+(c1.m_imaginary*c2.m_real);

        return new Complex(realpart,imgpart);

    }

    public Complex divide(Complex c1,Complex c2){

        Complex c3=new Complex(c2.m_real,-c2.m_imaginary);

        Complex c4;

        c4=multiply(c1, c3);

        return new Complex(c4.m_real/((c3.m_real*c3.m_real)-(c3.m_imaginary*m_imaginary)),c4.m_imaginary/((c3.m_real*c3.m_real)-(c3.m_imaginary*m_imaginary)));

    }

}