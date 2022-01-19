using System;
using System.Collections.Generic;
using System.Text;

namespace ZB.BAL.Model
{
    public class JsonResponse
    {

        public long? ID { get; set; }

        public string Status { get; set; }
        
        public string Message { get; set; }

        public object PrimaryData { get; set; }

        public object SecondaryData { get; set; }
        
        public object TeritaryData { get; set; }

        public string Token { get; set; }

        public string InceptionDate { get; set; }


    }
}
