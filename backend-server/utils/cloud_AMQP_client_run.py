from cloud_AMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://dsfixxwa:bd9CZoFh80xNzRcyG8RXwpklnnzejqMG@wombat.rmq.cloudamqp.com/dsfixxwa"

TEST_QUEUE_NAME = 'test'

def ts_basic():
	client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

	sentMsg = {'test':'demo'}
	client.sendMessage(sentMsg)
	client.sleep(10)
	receiveMsg = client.getMessage()
	assert sentMsg == receiveMsg
	print 'test_basic passed!'

if __name__ == "__main__":
	ts_basic()