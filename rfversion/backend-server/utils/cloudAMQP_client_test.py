from cloudAMQP_client import CloudAMQPClient

# USE YOUR OWN URL
CLOUDAMQP_URL = "amqp://gjbwkxpd:2owjokKiwpRK3Jz-ievVsbBYA7Wc9F-u@crane.rmq.cloudamqp.com/gjbwkxpd"

TEST_QUEUE_NAME = "onews"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receiveMsg = client.getMessage()
    assert sentMsg == receiveMsg
    print 'test_basic passed!'

if __name__ == "__main__":
    test_basic()
